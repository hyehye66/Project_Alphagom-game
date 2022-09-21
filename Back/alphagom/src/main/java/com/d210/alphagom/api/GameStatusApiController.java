package com.d210.alphagom.api;

import com.d210.alphagom.api.dto.GameStatusRequest;
import com.d210.alphagom.api.dto.ResponseDTO;
import com.d210.alphagom.domain.entity.User;
import com.d210.alphagom.domain.service.GameStatusService;
import com.d210.alphagom.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
