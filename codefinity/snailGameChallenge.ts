let stamina: number = 100;
let distance: number = 0;
const staminaPerMeter: number = 2;

while (stamina > 0) {
    stamina = stamina - staminaPerMeter;
    distance++;
}
console.log(`The snail got tired; it ran ${distance} meters. This is a new record, congratulations!`)