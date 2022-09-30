const HOST = 'http://localhost:8080/api/be';

const AUTH = 'auth/';
const GAME = 'game/';
const RANK = 'rank/';
const USER = 'user/';

export default {
    auth: {
        // 로그인
        login: () => HOST + AUTH + 'login',
    },
    user: {
        // 유저 정보 조회
        getUser: userId => HOST + USER + `${userId}`,
        // 유저 정보 변경
        postUserInfo: userId => HOST + USER + `${userId}` + `profile`,
        // 유저 회원 탈퇴
        deleteUser: userId => HOST + USER + `${userId}` + `profile`,
        // 유저 게임 로그 조회
        getUserLog: userId => HOST + `log/` + USER + `${userId}`,
        // 유저 닉네임 저장
        postUserNickname: (userId, nickname) => HOST + USER + `${userId}` + nickname + `${nickname}`,
        // 유저 튜토리얼 완료
        putUserCastle: userId => HOST + USER + `${userId}` + `castle`,
        // 유저 점수 저장
        postUserScore: userId => HOST + `point/` + USER + `${userId}`,
        // 유저 게임 클리어 여부 조회
        getClearGame: userId => HOST + `game/` + USER + `${userId}`,
    },
    game: {
        // 늪 의성어/의태어 문제 제공
        getSwampWord: () => HOST + GAME + `swamp/` + `word`,
        // 동굴 젠말놀이 문제 제공
        getCaveTongue: () => HOST + GAME + `cave/` + `tonguetwister`,
        // 하늘 새 속담 문제 제공
        getSkyBird: () => HOST + GAME + `sky/` + `bird`,
    },
    rank: {
        // 전체 유저 랭크 조회
        getAllUserRank: ({ tag }) => HOST + RANK + `${{ tag }}`,
        // 해당 유저 랭크 조회
        getUserRank: (userId, { tag }) => HOST + RANK + `user/` + `${userId}` + `${{tag}}`,
    },
    test: {
        testApi: () => `http://localhost:8080/api/v1/` + `test`,
    }
};