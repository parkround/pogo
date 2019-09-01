axios
  .get("instagram.php")
  .then(instagram_data => {
    console.log(instagram_data); // 検証ツールのConsoleを覗くと取得したデータの全容が確認できます。

    //
    //他のInstagramビジネスアカウントの投稿情報も取得したい場合

    const gallery_data =
      instagram_data["data"]["business_discovery"]["media"]["data"];
    console.log(gallery_data);
    //
    //自分のInstagramビジネスアカウントの投稿情報が取得できればOKな場合は
    //const gallery_dataを下記にする。

    // const gallery_data = instagram_data["data"]["media"]["data"];

    let photos = "";
    const maxCount = 12;
    gallery_data.map((item,index)=>{
      if(index>=maxCount) return;
      if (item.media_type === "IMAGE") {
        photos += `<li class="gallery-item"><a href="${
          item.permalink
        }" target=”_blank”><img class="igImage" src="${
          item.media_url
        }"></a></li>`;
      } else if (item.media_type === "CAROUSEL_ALBUM") {
        photos += `<li class="gallery-item album"><a href="${
          item.permalink
        }" target=”_blank”><img class="igImage" src="${
          item.media_url
        }"></a></li>`;
      } else {
        photos += `<li class="gallery-item video"><a href="${
          item.permalink
        }" target=”_blank”><video class="igImage" src="${
          item.media_url
        }"></video></a></li>`;
      }
    });
    console.log(photos);
    document.querySelector("#gallery").innerHTML = photos;
  })
  .catch(error => {
    console.log(error);
  });
