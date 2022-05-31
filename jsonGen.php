<?php
// array multi-dimensi
$array = Array (
    "0" => Array (
        "id" => "USER1",
        "name" => "Jam Ibadah Umum",
        "company" => "Pagi 08.00 WIB
        Live on YouTube: GGP Elim
        Pagi 10.00 WIB
        Live on YouTube: GGP Elim
        Jam Ibadah Youth
        Pagi 08.00 WIB
        Live on Instagram: Youth Elim
        Pagi 10.30 WIB
        Live on Instagram: Youth Elim"
    ),
    "1" => Array (
        "id" => "USER2",
        "name" => "Bill Gates",
        "company" => "Pada masa COVID ini, kita sudah beberapa tahun tidak pergi ke luar kota atau ke tempat wisata yang ramai dikunjungi orang. Rasanya, bagi sebagian orang mungkin ada keinginan dengan beberapa orang dekatnya atau keluarga untuk wisata atau jalan-jalan ke luar negeri. Meskipun hal itu bukan merupakan kebahagiaan inti, tetapi rasanya tetap menyenangkan juga jika bisa pergi dengan orang-orang yang kita kasihi, kita bisa bercengkrama, berbicara tentang kebenaran dan memikirkan pekerjaan Tuhan. Tetapi, sebenarnya ada wisata kekal di Kerajaan Surga. "
    ),
    "2" => Array (
        "id" => "USER3",
        "name" => "Mark Zuckerberg",
        "company" => "Sekarang kita diajak wisata ke tempat abadi; Kerajaan Surga. Namun, terkadang ketika mendengar atau membaca masalah hidup yang begitu tragis, jawaban yang kita dapatkan adalah: “Itu bukan masalah besar. Kalau kamu ingat ada tempat abadi"
    )
);

// encode array to json
$json = json_encode(array('jamibadahH' => $array));

// write json to file
if (file_put_contents("jamh.json", $json)){
    echo "File JSON sukses dibuat...";
} else {
    echo "Oops! Terjadi error saat membuat file JSON...";
}
?>