package com.wedding.publish.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString(callSuper = true)
@Table(name = "hmi")
@Entity
public class HMIDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


}
