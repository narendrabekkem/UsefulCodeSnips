var gr=new GlideRecord('incident');
gr.get('7a9d28bd97aaa11081a6bb46f053afec');
//GlideRecord Element Descriptor returns propeties of current gliderecord
gs.info(gr.getED().getInternalType()); //collection
//GlideRecord find method searches all records with given column name and value return true if matches founds
gs.info(gr.find('short_description','updated from bg script'));
gr.short_description='blah';
//GlideRecord Get Attributes returns the specified dictionary attribute value of a field
gs.info('Attribute "Tree Picker" = '+gr.assignment_group.getAttribute('tree_picker'));
//GlideRecord Method return true if any field value changed on current GlideRecord
gs.info(gr.changes());
//GlideRecord Method returns all field values on gliderecord
gs.info(gr.getFields());
//GlideRecord Method returns GlideRecord's table
gs.info(gr.getTableName());
//GlideElement method returns fields tablename
gs.info(gr.caller_id.user_name.getTableName());
//GlideElement returns true/false based on field values is changed or not.
gs.info(gr.short_description.changes());
//GlideElement method returns fields tablename
gs.info(gr.caller_id.getTableName());
//GlideElement method returns task as assignment group is originally task field
gs.info(gr.assignment_group.getBaseTableName());
//Glide Element Descriptor return information about field
gs.info(gr.assignment_group.getED().getInternalType()); //reference
//GlideRecordUtil class, getFields Methods all fields of current GlideRecord
var gu=new GlideRecordUtil();
gs.info(gu.getFields(gr));

