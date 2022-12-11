pub fn split_title(title: String) -> Vec<String> {
  let mut splitted_title: Vec<String> = vec![];
  let token = tinysegmenter::tokenize(&title);

  let mut row = String::new();

  for (i, seg) in token.iter().enumerate() {
    if &row.chars().count() + seg.chars().count() <= 15 {
      row += seg;
      if token.len() == i + 1 {
        splitted_title.push(row.clone());
      }
    } else {
      if token.len() == i + 1 {
        splitted_title.push(seg.to_string());
      } else {
        splitted_title.push(row);
        row = seg.to_string();
      }
    }
  }
  splitted_title
}
