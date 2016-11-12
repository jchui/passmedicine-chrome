
// ** PassMedicine **

$("#sidebarwrapper").prepend("<div class='clear-btn vulpes'><a href='#' id='clear-highlight'>Clear Highlights</a></div>");
$("#sidebarwrapper").prepend("<div class='ref-values vulpes'><a href='#' id='get-values'>Get Reference Values</a></div>");


// Adds column for PassMedicine References

var objGroup = [
  { "name": "Haemoglobin,Hb", "value": "Men: 13.5-18 g/dl Women: 11.5-16 g/dl" },
  { "name": "Mean cell volume,MCV", "value": "82-100 fl" },
  { "name": "Platelets,Plt", "value": "150-400 * 109/l" },
  { "name": "White blood cells,WBC,White cell count,White cells,WCC", "value": "4-11 * 109/l" },
  { "name": "Sodium,Na+,Na,Na+ (mmol/l)", "value": "135-145 mmol/l" },
  { "name": "Potassium,K+,K,K+ (mmol/l)", "value": "3.5 - 5.0 mmol/l" },
  { "name": "Urea,Urea (mmol/l)", "value": "2.0-7 mmol/l" },
  { "name": "Creatinine,Creatinine (µmol/l)", "value": "55-120 umol/l" },
  { "name": "Bicarbonate,HCO3", "value": "22-28 mmol/l" },
  { "name": "Chloride,Cl-,Cl", "value": "95-105 mmol/l" },
  { "name": "Bilirubin", "value": "3-17 umol/l" },
  { "name": "Alanine transferase (ALT),ALT", "value": "3-40 iu/l" },
  { "name": "Aspartate transaminase (AST),AST", "value": "3-30 iu/l" },
  { "name": "Alkaline phosphatase (ALP),ALP", "value": "30-100 umol/l" },
  { "name": "Gamma glutamyl transferase (yGT),yGT", "value": "8-60 u/l" },
  { "name": "Albumin", "value": "35-50 g/l" },
  { "name": "Total protein", "value": "60-80 g/l" },
  { "name": "Erythrocyte sedimentation rate (ESR),ESR", "value": "Men: < (age / 2) mm/hr Women: < ((age + 10) / 2) mm/hr" },
  { "name": "Prothrombin time (PT),PT", "value": "10-14 secs" },
  { "name": "Activated partial thromboplastin time (APTT),APTT", "value": "25-35 secs" },
  { "name": "Ferritin", "value": "20-230 ng/ml" },
  { "name": "Vitamin B12", "value": "200-900 ng/l" },
  { "name": "Folate", "value": "3.0 nmol/l" },
  { "name": "Reticulocytes", "value": "0.5-1.5%" },
  { "name": "D-Dimer", "value": "< 400 ng/ml" },
  { "name": "Calcium,Corrected Calcium,Ca2+", "value": "2.1-2.6 mmol/l" },
  { "name": "Phosphate,PO4-3", "value": "0.8-1.4 mmol/l" },
  { "name": "C-Reactive Protein, C Reative Protein,CRP", "value": "< 10 mg/l" },
  { "name": "Thyroid stimulating hormone (TSH),TSH", "value": "0.5-5.5 mu/l" },
  { "name": "Free thyroxine (T4),Free T4", "value": "9-18 pmol/l" },
  { "name": "Total thyroxine (T4),Total T4", "value": "70-140 nmol/l" },
  { "name": "Free triiodothyronine (T3),Free T3", "value": "3.0-7.5 pmol/l" },
  { "name": "Total triiodothyronine (T3),Total T3", "value": "1.2-3.1 nmol/l" },
  { "name": "Amylase", "value": "70-300 u/l" },
  { "name": "Uric acid", "value": "0.18-0.48 mmol/l" },
  { "name": "pH", "value": "7.35 - 7.45" },
  { "name": "pCO2", "value": "4.5 - 6.0 kPa" },
  { "name": "pO2", "value": "10 - 14 kPa" },
  { "name": "Total cholesterol", "value": "< 5 mmol/l" },
  { "name": "Triglycerides", "value": "< 2 mmol/l" },
  { "name": "HDL cholesterol", "value": "> 1 mmol/l" },
  { "name": "LDL cholesterol", "value": "< 3 mmol/l" }
];

$("#get-values").click(function() {
	
	$('.tb tr td:nth-child(1)').each( function(){
	
		var query = $.trim($(this).text());
		
		var found = findItem(objGroup, query);
	
		function findItem(array, value) {
		    for (var i = 0; i < array.length; i++) {
		        if (array[i].name.split(',').indexOf(value) >= 0) {
		           return objGroup[i];
		        }
		    }
		}
		
		var result = "";
		
		if (found) {
		    //console.log(found.value);
		    result = found.value;
		} else {
			//console.log("Not found.");
			result = "Not found.";
		}
		
		//console.log("Adding values for " + query + " (" + result + ").");
		
	    $(this).parent().append("<td>" + result + "</td>");
	});
	
});

$("#questionblock").on("mouseup", function (e) {
    var selected = getTextSelection();
    var range = selected.getRangeAt(0);
    //console.log(range);
    if(selected.toString().length > 1){
        var newNode = document.createElement("span");
        newNode.setAttribute("class", "highlight");
        range.surroundContents(newNode);       
    }
    selected.removeAllRanges();
 });

function getTextSelection() {
    var seltxt = '';
     if (window.getSelection) { 
         seltxt = window.getSelection(); 
     } else if (document.getSelection) { 
         seltxt = document.getSelection(); 
     } else if (document.selection) { 
         seltxt = document.selection.createRange().text; 
     }
    else return;
    return seltxt;
}

$("#clear-highlight").click(function() {
	
	$("#questionblock span").removeClass("highlight");
	$('#questionblock span').contents().unwrap();
	
});