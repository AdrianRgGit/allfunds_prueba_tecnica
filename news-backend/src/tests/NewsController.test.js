const request = require("supertest");
const app = require("../index");

describe("GET /api/news/getallnews", () => {
  it("should return a 200 status", async () => {
    const response = await request(app).get("/api/news/getallnews");

    // NOTE: VERIFICA EL STATUS DE LA RESPUESTA
    expect(response.status).toBe(200);

    // NOTE: VERIFICA QUE EL BODY DE LA RESPUESTA TENGA LAS PROPIEDADES NECESARIAS
    expect(response.body).toHaveProperty("news");
    expect(response.body).toHaveProperty("currentPage");
    expect(response.body).toHaveProperty("totalPages");
    expect(response.body).toHaveProperty("totalNews");
  });
});

describe("GET /api/news/getarchivednews", () => {
  it("should return a 200 status", async () => {
    const response = await request(app).get("/api/news/getarchivednews");

    // NOTE: VERIFICA EL STATUS DE LA RESPUESTA
    expect(response.status).toBe(200);

    // NOTE: VERIFICA QUE EL BODY DE LA RESPUESTA TENGA LAS PROPIEDADES NECESARIAS
    expect(response.body).toHaveProperty("news");
    expect(response.body).toHaveProperty("currentPage");
    expect(response.body).toHaveProperty("totalPages");
    expect(response.body).toHaveProperty("totalNews");
  });
});

describe("CREATE, ARCHIVE AND DELETE NEWS", () => {
  let newsId;

  // NOTE: TEST DE CREACIÓN DE NOTICIA
  beforeAll(async () => {
    const newNewsData = {
      title: "Noticia para pruebas",
      description: "Descripción",
      content: "Contenido",
    };

    const response = await request(app)
      .post("/api/news/createnew")
      .send(newNewsData);

    // NOTE: GUARDO EL ID DE LA NOTICIA CREADA PARA SU USO EN LOS OTROS TESTS
    newsId = response.body._id;

    // NOTE: VERIFICA EL STATUS DE LA RESPUESTA
    expect(response.status).toBe(201);

    // NOTE: VERIFICA EL CUERPO DE LA RESPUESTA
    expect(response.body).toHaveProperty("_id");
    expect(response.body).toHaveProperty("title", newNewsData.title);
    expect(response.body).toHaveProperty(
      "description",
      newNewsData.description
    );
    expect(response.body).toHaveProperty("content", newNewsData.content);
    expect(response.body).toHaveProperty("author", "Anónimo");
  });

  // NOTE: TEST DE ARCHIVADO DE NOTICIA
  it("should archive the news successfully (PUT /api/news/archivenew/:id)", async () => {
    const response = await request(app).put(`/api/news/archivenew/${newsId}`);

    // NOTE: VERIFICA EL STATUS DE LA RESPUESTA
    expect(response.status).toBe(200);

    // NOTE: VERIFICA EL CUERPO DE LA RESPUESTA
    expect(response.body).toHaveProperty("archiveDate");
    expect(new Date(response.body.archiveDate).toString()).not.toBe(null);
  });

  // NOTE: TEST DE ELIMINACIÓN DE NOTICIA
  it("should delete the news successfully (DELETE /api/news/deletenew/:id)", async () => {
    const response = await request(app).delete(`/api/news/deletenew/${newsId}`);

    // NOTE: VERIFICA EL STATUS DE LA RESPUESTA
    expect(response.status).toBe(200);

    // NOTE: VERIFICA EL CUERPO DE LA RESPUESTA
    expect(response.body).toHaveProperty("message", "New deleted successfully");
  });
});
