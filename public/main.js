axios.get("instagram.php").then(instagram_data=>{
    console.log(instagram_data);// 検証ツールのConsoleを覗くと取得したデータの全容が確認できます。
      
    //
    //他のInstagramビジネスアカウントの投稿情報も取得したい場合
    
    const gallery_data = instagram_data["data"]["business_discovery"]["media"]["data"];
    console.log(gallery_data);
    //
    //自分のInstagramビジネスアカウントの投稿情報が取得できればOKな場合は
    //const gallery_dataを下記にする。
  
    // const gallery_data = instagram_data["data"]["media"]["data"];
  
    let photos = "";
    const photo_length = 9;
    
    for(let i = 0; i < photo_length ;i++){
      if(gallery_data[i].media_type === "IMAGE" || gallery_data[i].media_type === "CAROUSEL_ALBUM"){
      photos += '<li class="gallery-item"><img class="igImage" src="' + gallery_data[i].media_url + '"></li>';
      }else{
        photos += '<li class="gallery-item"><video class="igImage" src="' + gallery_data[i].media_url + '"></video></li>';
      }
    } 
    console.log(photos);
    document.querySelector("#gallery").innerHTML = photos;
  }).catch(error=>{
    console.log(error);
  })