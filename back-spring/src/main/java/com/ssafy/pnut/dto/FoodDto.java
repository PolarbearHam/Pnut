package com.ssafy.pnut.dto;

import com.ssafy.pnut.entity.Food;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FoodDto {
    private long foodId;
    private String name;
    private String desc;
    private int time;
    private String efficiency;
    private int amount;
    private String unit;

    public static FoodDto toDto(Food food){
        return new FoodDto(
                food.getFoodId(),
                food.getName(),
                food.getDescription(),
                food.getTime(),
                food.getEfficiency(),
                food.getAmount(),
                food.getUnit()
        );
    }
    public Food toEntity(){
        return new Food(foodId, name, desc, time, efficiency, amount, unit);
    }
}
