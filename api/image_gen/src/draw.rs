use image::{DynamicImage, Rgba};
use imageproc::drawing::draw_text_mut;
use rusttype::{Font, Scale};

pub fn draw(mut image: DynamicImage, font: Font, splitted_title: Vec<String>) -> DynamicImage {
  let height = 100.0;
  let scale = Scale {
    x: height,
    y: height,
  };

  for (i, text) in splitted_title.iter().enumerate() {
    let y = 40 + 100 * (i - 0) as i32;
    draw_text_mut(
      &mut image,
      Rgba([255u8, 255u8, 255u8, 255u8]),
      50,
      y,
      scale,
      &font,
      text,
    );
  }

  image
}
