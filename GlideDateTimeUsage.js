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



//Add GlideTime object to GlideDateTime object
gs.info("Time of execution:"+ new GlideDateTime()+"\n TimeZone of the session:"+ gs.getSession().getTimeZoneName());
var gdt = new GlideDateTime();
var gtime1 = new GlideTime();
gtime1.setValue("00:10:00");//setting time object to 10 mins
gdt.add(gtime1); //adding time to datetime object
gs.info(gdt);


//Output
*** Script: Time of execution:2023-08-28 14:48:20
 TimeZone of the session:Europe/Amsterdam
*** Script: 2023-08-28 14:58:20



//Logical Evaluation between two DateTime Objects
gs.info("Time of execution:"+ new GlideDateTime()+"\n TimeZone of the session:"+ gs.getSession().getTimeZoneName());
//Initiate New DateTimeObject with Current DateTime in UTC
var timestamp= new GlideDateTime();
//Initiate New DateTimeObject with DateTime provided in UTC
var date1 = new GlideDateTime('2023-08-28 12:00:00');
//Initiate New DateTimeObject with DateTime provided in UTC 
var date2 = new GlideDateTime('2023-09-31 12:00:00');
gs.info('Date 1: '+ date1 + '\n Date 2: '+date2);
gs.info('Date1 is after Date2: '+ date1.after(date2));
gs.info('Date1 is greater than Date2: ' + (date1>date2));
gs.info('Date1 is before Date2: '+ date1.before(date2));
gs.info('Date1 is compared to Date2: '+ date1.compareTo(date2));
gs.info('Date2 is compared to Date1: '+ date2.compareTo(date1));
gs.info('Date2 is equal to Date1: '+ date2.equals(date1));


//Ouptut


[0:00:00.057] Script completed in scope global: script
Script execution history and recovery available here
download result
*** Script: Time of execution:2023-08-28 17:06:50
 TimeZone of the session:Europe/Amsterdam
*** Script: Date 1: 2023-08-28 12:00:00
 Date 2: 2023-10-01 12:00:00
*** Script: Date1 is after Date2: false
*** Script: Date1 is greater than Date2: false
*** Script: Date1 is before Date2: true
*** Script: Date1 is compared to Date2: -1
*** Script: Date2 is compared to Date1: 1
*** Script: Date2 is equal to Date1: false




DateTime Difference

gs.info("Time of execution:"+ new GlideDateTime()+"\n TimeZone of the session:"+ gs.getSession().getTimeZoneName());
//Initiate New DateTimeObject dt1,dt2 with given DateTime in UTC
var dt1= new GlideDateTime('2023-08-28 23:21:17');
var dt2= new GlideDateTime('2023-08-29 21:21:17');


//difference between two dates using GlideDateTime subtract method, returns difference in full datetime format.
var diff=GlideDateTime.subtract(dt1,dt2);
gs.info(diff);


//difference between two dates using GlideSystem DateDiff, Parameter 1 and 2 are glideDateTime object and paramater 3 true return difference in seconds, false returns in dd hh:mm:ss format
var diff=gs.dateDiff(dt1,dt2,true);
gs.info(diff);
var diff=gs.dateDiff(dt1,dt2,false);
gs.info(diff);


Output

*** Script: Time of execution:2023-08-28 18:14:42
 TimeZone of the session:IST
*** Script: 1970-01-01 22:00:00
*** Script: 79200
*** Script: 22:00:00

Check Minimum difference between two dates
//Initiate New DateTimeObject start,end with given DateTime in UTC
var start= new GlideDateTime('2023-08-22 23:21:17');
var end= new GlideDateTime('2023-08-29 21:21:17');
//check start date is greater than current time
var timenow=new GlideDateTime(); 
gs.info('Start date is greater than current time?: '+ start.after(timenow));
//check if minimum difference of 5 days between two dates
start.addDaysUTC(5);


if (start.after(end))
{
    gs.info('startdate +5days is greater than enddate');
}
else if (start.before(end))
{
    gs.info('startdate +5days is ealier than enddate')
}

Output

*** Script: Time of execution:2023-08-28 18:36:28
 TimeZone of the session:IST
*** Script: yyyy-MM-dd HH:mm:ss
*** Script: Start date is greater than current time?: false
*** Script: startdate +5days is ealier than enddate


Script to check Due,duesoon

var timenow=new GlideDateTime();
gs.info('Execution Time is '+ gs.nowGlideDateTime()+ ' Session Timezone is '+gs.getSession().getTimeZoneName()+' timezone offset '+ timenow.getTZOffset()/1000)
var gdt = new GlideDateTime();
var duedate = new GlideDateTime('2023-08-31 23:50:00');
gdt.addDaysUTC(2);
if(duedate.before(gdt)&&duedate.after(timenow))
{
    gs.info('Due within 2 days' +duedate.getUserFormattedLocalTime());
}
if(duedate.before(timenow))
{
    gs.info('Is already overdue');
}
if(duedate.after(gdt))
{
    gs.info('Task is not due soon')
}
Output
Execution Time is 2023-08-30 05:11:23 Session Timezone is Europe/Amsterdam timezone offset 7200
//when duedate is 2023-08-31 23:50:00 script return "Due within 2 Days"
//when duedate is 2023-08-11 23:50:00 sript retrun "Is already Due"
//when duedate is 2023-09-11 23:50:00 script return "Task is not due soon"


DateTime Difference including Schedule

gs.info('Session Execution Time: '+ gs.nowGlideDateTime()+ ' Current Users\'s timezoene: '+ gs.getSession().getTimeZoneName());
var startDate = new GlideDateTime('2023-09-05 16:00:00');
var endDate = new GlideDateTime('2023-09-12 07:00:00');
var schedule = new GlideSchedule();
var actualtime=GlideDateTime.subtract(startDate,endDate);
gs.info('Actual Time Difference: '+ actualtime.getDurationValue());
schedule.load('08fcd0830a0a0b2600079f56b1adb9ae','IST'); // loads "8-5 weekdays excluding holidays" schedule
gs.info(schedule.getName());
var duration = schedule.duration(startDate, endDate);
gs.info('Time difference in Business Time: '+ duration.getDisplayValue());

Output

*** Script: Session Execution Time: 2023-09-07 05:05:21 Current Users's timezoene: Europe/Amsterdam
*** Script: Actual Time Difference: 6 15:00:00
*** Script: 8-5 weekdays
*** Script: Time difference in Business Time: 1 Day 3 Hours 30 Minutes




