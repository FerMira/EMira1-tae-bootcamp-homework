/**
 * This class shows an example of poor Abrstaction using poor naming conventions.
 * Class is called Doc when it should be called Doctor. Doc might get confused with Documents for example.
 */

class Doc {


    private dName: string;
    private dAge: number;

    /**
     * Property dSpec is not clear of what it is.
     * If class Doc is confused with Document then dSpec could be confused with "Document Specifications" for example instead of "Doctor Specialization".
     */
    private dSpec: string;

    /**
     * Doctors don't fix... they cure or do surgery.
     */
    public fix() {
        console.log("Doc is fixing");
    }

}
