var arr=[
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXNXEeIGuHQnVe_Ojyr-_jIPRNcVaM_G1cEFEy3y3ORBAjfj4qNRxfUNJXxDiavR-bO8&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwg3mGbUxl4vXyHJ7vnuDJ-M5ldAeeVbkfA&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtiiEKu2DNcrWdAQ-J9_7Q5nvHPBS0wnasw&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR805BPzkqWAdY5EA7KZDp4x1wWe2Q7MsMiUA&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKd8edqV1A7ktuN_x71kAWmXJryoBqijcTg&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZ62cz09OjKiHVw-UYrml_la0xZOAzIb7EGp1jZWrqjzNtIN_lRfsa7syNVfNepw_-K0&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MoK_ba2Qg3oufS_acwvTh4vsGBTxbyBCEQ&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiHOSAsxEn69LAqkTYl-vrDRyvNtNeKzMUg&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwewpLodsnzXiEl6fr_UVdipUiPO_PUFRtw&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHG9Dv01yUBI1sluaJbRR9WXfmNFp7Suk5M6Yd9qKKLmsgZjRv3OVrKiGAVlYAL4EFH_0&usqp=CAU"},

    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIw2AkqNeQjsTwxG2OIIkXyCgthuCQRECKlVFb7FBWLsc17vF36uKvhJDbk2cRsKH9djY&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0p6KFxXR6p6mF5P5pouO_0LpOo_L7eWGooLMnupSrtOV3AEz6KQqGbw108MnoWp0rzE&usqp=CAU"},

    

]
var storiyan =document.querySelector("#storiyan")
var clutter ="";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}"alt="">

</div>`;
   
});
storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
    })
  


