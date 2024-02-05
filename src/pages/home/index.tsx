import Intro from "../../app/Components/Intro";

export default function Home() {
  const language = "PT-BR";
  return (
    <div id="curriculum">
      <Intro language={language} />
      <p style={{ marginTop: "3px" }}>
        {language === "PT-BR"
          ? "Você pode encontrar o código fonte deste currículo "
          : "You can find the source code of this resume "}
        <a href="https://github.com/1baldasso/Curriculo" target="_blank">
          {language === "PT-BR" ? "aqui" : "here"}
        </a>
      </p>
      <p>
        {language === "PT-BR"
          ? "Você pode encontrar o mais informações detalhadas das experiências "
          : "You can find more detailed information about the experiences "}

        {language === "PT-BR" ? (
          <a
            href="https://github.com/1Baldasso/Curriculo/blob/master/src/Assets/PersonInfoPTBR.md#experi%C3%AAncias"
            target="_blank"
          >
            aqui
          </a>
        ) : (
          <a
            href="https://github.com/1Baldasso/Curriculo/blob/master/src/Assets/PersonInfo.md#experiences"
            target="_blank"
          >
            here
          </a>
        )}
      </p>
    </div>
  );
}
