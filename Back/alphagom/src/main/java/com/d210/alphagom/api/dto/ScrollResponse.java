package com.d210.alphagom.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ScrollResponse<T> {
    private List<T> data;
    private Boolean hasNext;
    private Long curLastIdx;
    private int limit;
}
