package com.d210.alphagom.api.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class WordGameResponse {

    private String answer;

    private List<String> example;

    private String sentance;

    public WordGameResponse(String answer, List<String> example, String sentance) {
        this.answer = answer;
        this.example = example;
        this.sentance = sentance;
    }
}
