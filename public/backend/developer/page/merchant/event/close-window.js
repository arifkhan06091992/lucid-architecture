function closeCurrentWindow()
{
    var resultConfirm = confirm("Are you sure you want to exit ?");
    if (resultConfirm == true)
    {
        window.close();
    }
}