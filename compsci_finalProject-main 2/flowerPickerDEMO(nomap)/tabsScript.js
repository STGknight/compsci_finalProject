///TABS///
function openTabs(evt, tabName){
    //declare variables
    var i, tabcontent, tablinks;

    //grab elements w class="tabcontent" and hide
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //grab elements w class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", " ");
    }

    //show current tab, add "active" class to button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}