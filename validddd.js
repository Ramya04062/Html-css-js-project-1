function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="urname"&& password=="pass")
{
    alert("login succesfully");
    window.open("index.html");
    return false;

}
else
{
    alert("login failed")
    return false;
}


}