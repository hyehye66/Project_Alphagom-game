package com.d210.alphagom.api;

import com.d210.alphagom.api.dto.GameStatusRequest;
import com.d210.alphagom.api.dto.RankListResponse;
import com.d210.alphagom.api.dto.ResponseDTO;
import com.d210.alphagom.domain.condition.RankCondition;
import com.d210.alphagom.domain.entity.GameStatus;
import com.d210.alphagom.domain.entity.GameTag;
import com.d210.alphagom.domain.entity.User;
import com.d210.alphagom.domain.service.GameStatusService;
import com.d210.alphagom.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/be")
@RequiredArgsConstructor
public class GameStatusApiController {

    private final GameStatusService gameStatusService;

    private final UserService userService;

    @PostMapping("score/user/{userId}")
    public ResponseEntity<?> saveGameStatus(@PathVariable Long userId, @RequestBody GameStatusRequest request) {
        log.info("{}유저가 {}게임에 {}점수 저장", userId, request.getGameTag(), request.getScore());
        User user = userService.findUser(userId);
        gameStatusService.saveScore(request.getScore(), request.getGameTag(), user);
        return ResponseEntity.ok(new ResponseDTO("점수가 저장되었습니다."));
    }

    @GetMapping("rank/user/{userId}")
    public ResponseEntity<?> getUserRank(@PathVariable Long userId, @ModelAttribute RankCondition condition) {

        List<GameStatus> list = gameStatusService.findAllUserGameStatus(userId);

        // 전체 점수 리스트
        if (condition.getGameTag() == null) {
            List<RankListResponse> result = list.stream()
                    .map(o -> new RankListResponse(o.getId(), o.getCreatedDate(), o.getStatus(), o.getGameTag()))
                    .sorted(Comparator.comparing(RankListResponse::getStatus).reversed())
                    .collect(Collectors.toList());
            return ResponseEntity.ok(result);
        }

        // 게임 스테이지별 리스트
        if (condition.getGameTag().equals("swamp") || condition.getGameTag().equals("cave") || condition.getGameTag().equals("sky")) {
            List<RankListResponse> result = list.stream()
                    .filter(o -> o.getGameTag().toString().equals(condition.getGameTag()))
                    .map(o -> new RankListResponse(o.getId(), o.getCreatedDate(), o.getStatus(), o.getGameTag()))
                    .sorted(Comparator.comparing(RankListResponse::getStatus).reversed())
                    .collect(Collectors.toList());
            return ResponseEntity.ok(result);

        } else {
            return ResponseEntity.ok(new ResponseDTO("GameTag를 제대로 입력해주세요"));
        }
    }
}
