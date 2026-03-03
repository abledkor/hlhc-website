// Cloudflare Pages Function: /api/videos
// KV 바인딩 이름: VIDEOS_KV  (Cloudflare 대시보드에서 설정 필요)

const PW_HASH = '51adbed8359a742a26df4a353a4cc8c2727b95c69c4e43fb9dac78a28289ed39';
const KV_KEY  = 'videos';

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: CORS });
  }

  // GET: 영상 목록 반환
  if (request.method === 'GET') {
    const data = await env.VIDEOS_KV.get(KV_KEY);
    return json(data ? JSON.parse(data) : []);
  }

  // POST: 비밀번호 검증 + 추가/삭제/확인
  if (request.method === 'POST') {
    let body;
    try { body = await request.json(); }
    catch { return json({ error: '잘못된 요청입니다.' }, 400); }

    const { password, action, video, videoId } = body;

    // 비밀번호 서버 검증
    const hash = await sha256(password || '');
    if (hash !== PW_HASH) {
      return json({ error: '비밀번호가 올바르지 않습니다.' }, 403);
    }

    // 비밀번호만 확인
    if (action === 'verify') {
      return json({ ok: true });
    }

    // 현재 목록
    const data = await env.VIDEOS_KV.get(KV_KEY);
    let videos = data ? JSON.parse(data) : [];

    if (action === 'add' && video) {
      videos.unshift(video);
    } else if (action === 'delete' && videoId) {
      videos = videos.filter(v => v.id !== videoId);
    } else {
      return json({ error: '잘못된 action입니다.' }, 400);
    }

    await env.VIDEOS_KV.put(KV_KEY, JSON.stringify(videos));
    return json(videos);
  }

  return new Response('Method Not Allowed', { status: 405 });
}
