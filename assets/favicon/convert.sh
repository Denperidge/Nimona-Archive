cp minimal.png favicon.png

for file in *.png;
do
    ffmpeg -i "${file}" -vf scale=32:32 "../../src/themes/${file%.png}.ico"

done

