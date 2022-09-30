const HOST = "http://localhost:8080/api/";

const BE = "be/";
const AI = "ai/";

const AUTH = "auth/";
const GAME = "game/";
const RANK = "rank/";
const USER = "user/";

export default {
  auth: {
    // 로그인
    login: () => HOST + BE + AUTH + "login",
  },
  user: {
    // 유저 정보 조회
    getUser: (userId) => HOST + BE + USER + `${userId}`,
    // 유저 정보 변경
    postUserInfo: (userId) => HOST + BE + USER + `${userId}` + `profile`,
    // 유저 회원 탈퇴
    deleteUser: (userId) => HOST + BE + USER + `${userId}` + `profile`,
    // 유저 게임 로그 조회
    getUserLog: (userId) => HOST + BE + `log/` + USER + `${userId}`,
    // 유저 닉네임 저장
    postUserNickname: (userId, nickname) =>
      HOST + BE + USER + `${userId}` + nickname + `${nickname}`,
    // 유저 튜토리얼 완료
    putUserCastle: (userId) => HOST + BE + USER + `${userId}` + `castle`,
    // 유저 점수 저장
    postUserScore: (userId) => HOST + BE + `point/` + USER + `${userId}`,
    // 유저 게임 클리어 여부 조회
    getClearGame: (userId) => HOST + BE + `game/` + USER + `${userId}`,
  },
  game: {
    // 늪 의성어/의태어 문제 제공
    getSwampWord: () => HOST + BE + GAME + `swamp/` + `word`,
    // 동굴 젠말놀이 문제 제공
    getCaveTongue: () => HOST + BE + GAME + `cave/` + `tonguetwister`,
    // 하늘 새 속담 문제 제공
    getSkyBird: () => HOST + BE + GAME + `sky/` + `bird`,

    // 응, 아니 인식
    yesOrNo: () => HOST + AI + `magiccastle/` + `check`,
    // 의성어 / 의태어 인식
    aiSwampWord: () => HOST + AI + `swamp/` + `word`,
    // 새 이름 인식
    aiSkyBird: () => HOST + AI + `sky/` + `bird`,
  },
  rank: {
    // 전체 유저 랭크 조회
    getAllUserRank: ({ tag }) => HOST + BE + RANK + `${{ tag }}`,
    // 해당 유저 랭크 조회
    getUserRank: (userId, { tag }) =>
      HOST + BE + RANK + `user/` + `${userId}` + `${{ tag }}`,
  },
  test: {
    testApi: () => `http://localhost:8080/api/v1/` + `test`,
  },
};
