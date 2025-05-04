for (let i = 1; i < 21; i++) {
    if (i == 15) {
      break;
    } else if (i % 2 != 0) {
      continue;
    } else {
      console.log(i);
    }
  }
  