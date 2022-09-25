package com.d210.alphagom.api.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TongueGameResponse {

    private String sentance;

    public TongueGameResponse(String sentance) {
        this.sentance = sentance;
    }
}
