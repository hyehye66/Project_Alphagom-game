package com.d210.alphagom.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Tag(name = "Test", description = "Test api 입니다.")
@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Operation(summary = "test", description = "test api 입니다.")
    @GetMapping("/")
    private ResponseEntity<?> test() {
        Map<String, Object> result = new HashMap<>();
        result.put("time", LocalDate.now());
        return ResponseEntity.ok().body(result);
    }
}
