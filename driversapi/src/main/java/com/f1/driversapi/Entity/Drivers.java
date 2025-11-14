package com.f1.driversapi.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="drivers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Drivers {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank @Size(max=80)
    @Column(name = "DriverName")
    private String name;

    @NotBlank @Size(max=80)
    private String nationality;

    @NotBlank
    private String team;
    @Min(0)
    private double points;




}
