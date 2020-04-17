function rgb(...hex){
    return hex.map((item) => {
      if(item < 0) return "00";
      if(item > 255) return "FF";
      return item < 16 ? '0' + item.toString(16) : item.toString(16);
    }).join('').toUpperCase();
  }