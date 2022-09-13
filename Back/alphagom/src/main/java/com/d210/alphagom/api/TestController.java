package com.d210.alphagom.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {
    @GetMapping("/")
    private ResponseEntity<?> test() {
        Map<String, Object> result = new HashMap<>();
        result.put("time", LocalDate.now());
        return ResponseEntity.ok().body(result);
    }
}
