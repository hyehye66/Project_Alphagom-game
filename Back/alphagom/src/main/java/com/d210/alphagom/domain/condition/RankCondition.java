package com.d210.alphagom.domain.condition;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class RankCondition {
    private String gameTag;
    private Long curLastIdx = Long.MAX_VALUE;
    private int limit = 10;
}
