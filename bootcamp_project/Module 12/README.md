### This README file contains the instructions to execute BasicTest.ts with reporting.

After cloning the project execute:
`npm install`

This will install libraries needed to execute the test with HTML and video report.

To execute the test you need to run following command:
`npm run test:html-reports`

After test finishes you will have a html document called BasicTest.html under reports/htmlReports folder and a video recording of the excution under reports/videos folder.

### NOTE
If libraries are not installed after executing `npm install` you can execute below commands to add them manually:
*HTML Repor Library*
`npm install testcafe-reporter-html`

*Video Recording*
`npm install --save @ffmpeg-installer/ffmpeg`
