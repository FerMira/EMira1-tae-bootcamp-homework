interface Switchable {

    isOn: boolean;

    turnOn(): void;

    turnOff(): void;

}

interface MusicPlayer {

    volume: number;

    playMusic(): void;

    setVolume(volume: number): void;

}

interface TemperatureAdjustable {

    temperature: number;

    setTemperature(temp: number): void;

}

interface SwitchablePlayable extends Switchable, MusicPlayer {}

class SmartLight implements Switchable {

    isOn: boolean;
    lightName: string

    constructor (isOn: boolean, lightName: string) {
        this.isOn = isOn;
        this.lightName = lightName;
    }

    turnOn(): void {
        console.log(`${this.lightName} is turned on`);
        this.isOn = true;
    }

    turnOff(): void {
        console.log(`${this.lightName} is turned off`);
        this.isOn = false;
    }
}

class SmartSpeaker implements Switchable, MusicPlayer {

    isOn: boolean;
    speakerName: string;
    volume: number;

    constructor (isOn: boolean, speakerName: string, vol: number) {
        this.isOn = isOn;
        this.speakerName = speakerName;
        this.volume = vol;
    }

    turnOn(): void {
        console.log(`${this.speakerName} is turned on`);
        this.isOn = true;
    }

    turnOff(): void {
        console.log(`${this.speakerName} is turned off`);
        this.isOn = false;
    }

    playMusic(): void {
        console.log(`${this.speakerName} is playing music`);
    };

    setVolume(volume: number): void {

        if(volume < 0 || volume > 100) {
            throw new Error("Volume is out of range")
        }
        this.volume = volume;
        console.log(`${this.speakerName} is at volume ${volume}`);
    };
}

class SmartThermostat implements Switchable, TemperatureAdjustable {

    isOn: boolean;
    temperature: number;
    thermostatName: string

    constructor (isOn: boolean, thermostatName: string, temp: number) {
        this.isOn = isOn;
        this.thermostatName = thermostatName;
        this.temperature = temp;
    }

    turnOn(): void {
            console.log(`${this.thermostatName} is turned on`);
            this.isOn = true;
    }

    turnOff(): void {
            console.log(`${this.thermostatName} is turned off`);
            this.isOn = false;
    }

    setTemperature(temperature: number): void {
        if(temperature < -273.15) {
            throw new Error("Temperature is to low.")
        }
        this.temperature = temperature;
        console.log(`${this.thermostatName} is at ${temperature} degrees`);
    };
}

class SmartFridge implements Switchable, TemperatureAdjustable, MusicPlayer {

    isOn: boolean;
    temperature: number;
    volume: number;
    fridgeName: string;

    constructor (isOn: boolean, temp: number, vol:number, fridgeName: string) {
        this.isOn = isOn;
        this.temperature = temp;
        this.volume = vol;
        this.fridgeName = fridgeName;
    }

    turnOn(): void {
        console.log(`${this.fridgeName} is turned on`);
        this.isOn = true;
    }

    turnOff(): void {
        console.log(`${this.fridgeName} is turned off`);
        this.isOn = false;
    }

    setTemperature(temperature: number): void {
        if(temperature < -273.15) {
            throw new Error("Temperature is to low.")
        }
        this.temperature = temperature;
        console.log(`${this.fridgeName} is at ${temperature} degrees`);
    };

    playMusic(): void {
        console.log(`${this.fridgeName} is playing music`);
    };

    setVolume(volume: number): void {
        if(volume < 0 || volume > 100) {
            throw new Error("Volume is out of range")
        }
        this.volume = volume;
        console.log(`${this.fridgeName} is at volume ${volume}`);
    };

}

function switchAndPlay(devices: SwitchablePlayable[]): void {
    for (const device of devices) {
        device.turnOn();
        device.playMusic();

    }
}

const sonicSpeaker = new SmartSpeaker(false, "Sonic S-100", 8);
const boseSpeaker = new SmartSpeaker(false, "Bose B-15", 5);
const samsFridge = new SmartFridge(false, 4, 8, "Samsung SS");
const lgFridge = new SmartFridge(false, 5, 10, "LG SmartCool");

//Arrays
const switchPlayDevices: SwitchablePlayable[] = [sonicSpeaker, boseSpeaker, samsFridge, lgFridge];

//Using function
switchAndPlay(switchPlayDevices);
