//Add Seconds to GlideDateTimeObject
gs.info("Time of execution:"+ new GlideDateTime()+"\n TimeZone of the session:"+ gs.getSession().getTimeZoneName());
var gd2=new GlideDateTime(); //new DateTime object with current time
gd2.addSeconds(600); //adds 600 seconds
gs.info(gd2);

//Output
*** Script: Time of execution:2023-08-28 14:40:45
 TimeZone of the session:Europe/Amsterdam
*** Script: 2023-08-28 14:50:45


//Add MilliSecond to GlideDateTimeObject
gs.info("Time of execution:"+ new GlideDateTime()+"\n TimeZone of the session:"+ gs.getSession().getTimeZoneName());
var gd2=new GlideDateTime();
gd2.add(600000);
gs.info(gd2);

//Output
*** Script: Time of execution:2023-08-28 14:44:42
 TimeZone of the session:Europe/Amsterdam
*** Script: 2023-08-28 14:54:42
