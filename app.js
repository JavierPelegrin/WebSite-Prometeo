document.getElementById("esp").style.display="none";
function ingles() {
    document.getElementById("bioEsp").style.display="none";
    document.getElementById("bioIng").style.display="grid";
    document.getElementById("ing").style.display="none"
    document.getElementById("esp").style.display="inline-block";
}
function esp() {
    document.getElementById("bioEsp").style.display="grid";
    document.getElementById("bioIng").style.display="none";
    document.getElementById("ing").style.display="inline-block";
    document.getElementById("esp").style.display="none";
}