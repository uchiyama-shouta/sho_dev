use anyhow::Result;
use image::Rgba;
use imageproc::drawing::draw_text_mut;
use rusttype::{Font, Scale};

pub fn gen(title: String) -> Result<()> {
    let mut image = image::open("assets/image/og_template.png").unwrap();
    let font = Vec::from(include_bytes!("../assets/fonts/Noto_Sans_JP/Bold.otf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();

    let height = 100.0;
    let scale = Scale {
        x: height,
        y: height,
    };

    // 文字列の長さに応じて分割(13文字?)
    let split_title = vec![
        "新しい状態管理ライブラリ",
        "「jotai」の使い方",
        "with TypeScript",
    ];

    for (i, text) in split_title.iter().enumerate() {
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

    image.save("output/test.png").unwrap();
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = gen("新しいReactの状態管理ライブラリ「Recoil」の使い方".to_string());

        match result {
            Ok(_) => println!("OK"),
            Err(msg) => println!("{}", msg),
        }
    }
}
