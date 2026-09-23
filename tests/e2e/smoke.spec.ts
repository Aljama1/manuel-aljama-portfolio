import { test, expect } from "@playwright/test";

test.describe("Smoke — rutas principales", () => {
  test("home ES (/) carga correctamente", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Manuel Aljama/);
    await expect(page.locator("h1")).toContainText(
      "CONVIERTO IDEAS EN SOFTWARE REAL.",
    );
  });

  test("home EN (/en/) carga correctamente", async ({ page }) => {
    await page.goto("/en/");
    await expect(page).toHaveTitle(/Manuel Aljama/);
    await expect(page.locator("h1")).toContainText(
      "I TURN IDEAS INTO REAL SOFTWARE.",
    );
  });

  test("Hero ES navigates to Projects and shows factual links", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Ver proyectos" }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator("#projects")).toBeVisible();

    const home = page.locator("main");
    await expect(home.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/Aljama1",
    );
    await expect(home.getByRole("link", { name: "Ver Trace" })).toHaveAttribute(
      "href",
      "/projects/trace",
    );
  });

  test("Asisteo does not show a public case study CTA", async ({ page }) => {
    await page.goto("/");

    const asisteo = page.locator("article").filter({ hasText: "ASISTEO" });
    await expect(asisteo).toHaveCount(1);
    await expect(asisteo.getByRole("link")).toHaveCount(0);
  });

  test("Trace ES (/projects/trace/) carga correctamente", async ({ page }) => {
    await page.goto("/projects/trace/");
    await expect(page.locator("h1")).toContainText("Trace");
  });

  test("Trace EN (/en/projects/trace/) carga correctamente", async ({
    page,
  }) => {
    await page.goto("/en/projects/trace/");
    await expect(page.locator("h1")).toContainText("Trace");
  });

  test("HTML lang='es' en la ruta raíz", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("es");
  });

  test("HTML lang='en' en la ruta /en/", async ({ page }) => {
    await page.goto("/en/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("en");
  });

  test("enlace accesible 'Saltar al contenido principal'", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
    await expect(page.locator("#main-content")).toBeAttached();
  });

  test("Header contiene marca, navegación de escritorio y footer", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: "MANUEL ALJAMA" }).first(),
    ).toBeVisible();
    await expect(page.locator("footer")).toContainText("Manuel Aljama");
    await expect(page.locator("footer")).toContainText(
      "Construyo ideas. Aprendo. Itero.",
    );
  });

  test("Alternar modo oscuro / claro", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");

    // Inicialmente modo oscuro
    await expect(html).not.toHaveClass(/light/);

    // Clic en ThemeToggle para pasar a light
    const themeButton = page
      .getByRole("button", { name: /cambiar a modo claro/i })
      .first();
    await themeButton.click();
    await expect(html).toHaveClass(/light/);

    // Clic de nuevo para volver a dark
    const darkButton = page
      .getByRole("button", { name: /cambiar a modo oscuro/i })
      .first();
    await darkButton.click();
    await expect(html).not.toHaveClass(/light/);
  });

  test("Ruta 404 carga correctamente y tiene botón de retorno", async ({
    page,
  }) => {
    await page.goto("/ruta-inexistente");
    await expect(page.locator("h1")).toContainText("Página no encontrada");
    const homeButton = page.getByRole("link", { name: "Volver al inicio" });
    await expect(homeButton).toBeVisible();
  });

  test("Ruta 404 EN carga correctamente y tiene botón de retorno", async ({
    page,
  }) => {
    await page.goto("/en/non-existent-route");
    await expect(page.locator("h1")).toContainText("Page Not Found");
    const homeButton = page.getByRole("link", { name: "Back to Home" });
    await expect(homeButton).toBeVisible();
  });
});

test.describe("Móvil — menú y navegación", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("menú hamburguesa abre drawer y se cierra al seleccionar ancla", async ({
    page,
  }) => {
    await page.goto("/");

    const openMenuBtn = page.getByRole("button", { name: /abrir menú/i });
    await expect(openMenuBtn).toBeVisible();
    await openMenuBtn.click();

    // Drawer de navegación abierto
    const navDialog = page.getByRole("dialog", { name: /menú de navegación/i });
    await expect(navDialog).toBeVisible();

    // Clic en Work debe cerrar el menú móvil (requisito de la constitución)
    const workLink = navDialog.getByRole("link", { name: "Work" });
    await workLink.click();
    await expect(navDialog).not.toBeVisible();
  });
});
