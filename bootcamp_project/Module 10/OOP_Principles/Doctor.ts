/**
 * This class shows an example of Abrstaction using better naming conventions.
 * Class is called Doc when it should be called Doctor. Doc might get confused with "Documents" for example.
 */

class Doctor {


    private name: string;
    private age: number;
    private specialization: string;

    public doSurgery() {
        console.log("Doctor is operating a patient");
    }

}
