use anyhow::Result;
use draw::draw;
use rusttype::Font;
mod draw;
mod split_title;

pub fn gen(title: String) -> Result<()> {
  let image = image::open("assets/image/og_template.png").unwrap();
  let font = Vec::from(include_bytes!("../assets/fonts/Noto_Sans_JP/Bold.otf") as &[u8]);
  let font = Font::try_from_vec(font).unwrap();

  let splitted_title = split_title::split_title(title);

  let image = draw(image, font, splitted_title);

  image.save("output/test.png").unwrap();
  Ok(())
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
    let result = gen("新しい状態管理ライブラリjotaiの使い方".to_string());

    match result {
      Ok(_) => println!("OK"),
      Err(msg) => println!("{}", msg),
    }
  }
}
