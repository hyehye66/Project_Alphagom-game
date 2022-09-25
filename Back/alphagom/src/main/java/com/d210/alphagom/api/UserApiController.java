package com.d210.alphagom.api;

import com.d210.alphagom.api.dto.ResponseDTO;
import com.d210.alphagom.api.dto.UserResponse;
import com.d210.alphagom.domain.entity.User;
import com.d210.alphagom.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/be")
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<UserResponse> getUserInfo(@PathVariable Long userId) {

        log.info("{}번 유저 정보 조회", userId);
        User user = userService.findUser(userId);
        return ResponseEntity.ok(new UserResponse(user.getName()));
    }

    @PostMapping("/user/{userId}/nickname/{nickname}")
    public ResponseEntity<?> saveNickName(@PathVariable Long userId, @PathVariable String nickname) {
        
        log.info("{}번 유저 닉네임 : {} 저장", userId, nickname);
        userService.saveNickname(userId, nickname);
        return ResponseEntity.ok(new ResponseDTO("닉네임이 저장되었습니다"));
    }

    @PutMapping("/user/{userId}/castle")
    public ResponseEntity<?> checkPassCastle(@PathVariable Long userId) {
        
        log.info("{}번 유저 튜토리얼 통과", userId);
        userService.checkIsCastle(userId);
        return ResponseEntity.ok(new ResponseDTO("튜토리얼을 통과하였습니다."));
    }
}
