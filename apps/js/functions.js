// JavaScript Document


var baseurl = "http://www.carehospitals.com/";
function GetSpecialities(branchID){
	$("#speciality").empty();
	$("#speciality").append('<option value="">Select Specialty</option>');
	$.get(baseurl+'specialities/get_specialities/'+branchID,function(data){
		$("#speciality").append(data);	
	});
}


function Delete(recordID,tableName){
	var dataString  = "recordID="+recordID+"&tableName="+tableName;
	var conf = confirm("Are you Sure to Delete the Record?");
	if(conf){
		$.post(baseurl+'admin/deleterecord',dataString,function(data){
			if(data==1){
				alert("Record Deleted Successfully!");
				window.location.reload();
			}												
		});	
	}else{
		return false;	
	}
	
}

function Publish(recordID,tableName){
	var dataString  = "recordID="+recordID+"&tableName="+tableName;
	var conf = confirm("Are you Sure to Publish the Record?");
	if(conf){
		$.post(baseurl+'admin/publishrecord',dataString,function(data){
			if(data==1){
				alert("Record Published Successfully!");
				window.location.reload();
			}												
		});	
	}else{
		return false;	
	}
	
}

function Unpublish(recordID,tableName){
	var dataString  = "recordID="+recordID+"&tableName="+tableName;
	var conf = confirm("Are you Sure to UnPublish the Record?");
	if(conf){
		$.post(baseurl+'admin/unpublishrecord',dataString,function(data){
			if(data==1){
				alert("Record UnPublished Successfully!");
				window.location.reload();
			}												
		});	
	}else{
		return false;	
	}
	
}

function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}