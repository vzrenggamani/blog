---
title: "Arduino : PIR Module simple usage"
draft: true
date: 2019-12-6
author: "Rengga Prakoso Nugroho"
tags: ["programming","arduino"]
description: "Simplest usage of PIR Module in Arduino. Minimal configuration with minimal arduino programming."
---

Code script : 
```c++
int motion  = 0,   // Set initial state for the motion sensor
    pirPin  = 8,   // Set the PIR pin module

void setup() {
  pinMode(pirPin, INPUT);   // declare how the PIN behave
  Serial.begin(9600);       // Init the serial monitor to 9600 baud rate
}

void loop() {
  motion = digitalRead(pirPin);   // read the pirModule state and save as variable in "motion"
  if (motion == HIGH) {    // whetever the PIR detect motions tell the serial to print "Hallu" on serial.
    Serial.println("Hallu");
    delay(500);
    motion = LOW;   // Set the motion state to LOW again
  } else {          // otherwise, do nothing and print "No Motion" in serial.
    delay(500);
    Serial.println("Nomotion");
  }
}
```
*try not to copypaste it before knowing how it works*