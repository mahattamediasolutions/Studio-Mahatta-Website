"""Tests for the Studio Mahatta Website (all pages)"""

import pathlib
import unittest

ROOT = pathlib.Path(__file__).parent

def read(filename):
    return (ROOT / filename).read_text(encoding="utf-8")


class SharedStructureTests(unittest.TestCase):
    """Every page should have nav, footer, and common meta."""

    pages = ["index.html", "work.html", "services.html", "about.html", "contact.html"]

    def _check_all(self, snippet, msg):
        for page in self.pages:
            html = read(page)
            with self.subTest(page=page):
                self.assertIn(snippet, html, f"{page}: {msg}")

    def test_charset_utf8(self):
        self._check_all('charset="utf-8"', "Missing UTF-8 charset")

    def test_viewport_meta(self):
        self._check_all("viewport", "Missing viewport meta")

    def test_google_fonts_loaded(self):
        self._check_all("fonts.googleapis.com", "Google Fonts not linked")

    def test_stylesheet_linked(self):
        self._check_all('css/style.css', "Stylesheet not linked")

    def test_script_linked(self):
        self._check_all('js/main.js', "main.js not linked")

    def test_nav_logo(self):
        self._check_all("Studio Mahatta", "Nav logo text missing")

    def test_nav_links_present(self):
        for href in ["work.html", "services.html", "about.html", "contact.html"]:
            self._check_all(f'href="{href}"', f"Nav link to {href} missing")

    def test_mobile_menu_toggle(self):
        self._check_all("nav__toggle", "Mobile hamburger button missing")

    def test_footer_logo(self):
        self._check_all("footer__logo", "Footer logo missing")

    def test_footer_email(self):
        self._check_all("contact@studiomahatta.com", "Contact email missing")

    def test_footer_copyright(self):
        self._check_all("Studio Mahatta", "Footer copyright missing")


class HomePageTests(unittest.TestCase):
    def setUp(self):
        self.html = read("index.html")

    def test_title(self):
        self.assertIn("<title>Studio Mahatta", self.html)

    def test_hero_headline(self):
        self.assertIn("Telling", self.html)
        self.assertIn("stories that", self.html)

    def test_hero_tagline(self):
        self.assertIn("Boutique production house", self.html)

    def test_hero_cta(self):
        self.assertIn('href="work.html"', self.html)

    def test_marquee_present(self):
        self.assertIn("marquee", self.html)

    def test_featured_work_section(self):
        self.assertIn("Featured Work", self.html)

    def test_featured_projects(self):
        self.assertIn("Himalayan Archive", self.html)
        self.assertIn("Crafted", self.html)

    def test_services_preview(self):
        self.assertIn("What We Do", self.html)

    def test_four_services_listed(self):
        for s in ["Documentary", "Brand Films", "Animation", "OTT IP"]:
            self.assertIn(s, self.html)


class WorkPageTests(unittest.TestCase):
    def setUp(self):
        self.html = read("work.html")

    def test_title(self):
        self.assertIn("Work", self.html)

    def test_filter_buttons(self):
        for f in ["All", "Documentary", "Brand Film", "Animation", "OTT"]:
            self.assertIn(f, self.html)

    def test_six_projects(self):
        for p in ["Himalayan Archive", "Crafted", "Voices of the Valley",
                  "Luminary", "Thread", "The River Speaks"]:
            self.assertIn(p, self.html)

    def test_data_category_attributes(self):
        self.assertIn('data-category="documentary"', self.html)
        self.assertIn('data-category="brand-film"', self.html)
        self.assertIn('data-category="animation"', self.html)
        self.assertIn('data-category="ott"', self.html)


class ServicesPageTests(unittest.TestCase):
    def setUp(self):
        self.html = read("services.html")

    def test_title(self):
        self.assertIn("Services", self.html)

    def test_four_services(self):
        for s in ["Documentary Filmmaking", "Brand Films", "Animation", "OTT IP Development"]:
            self.assertIn(s, self.html)

    def test_service_numbers(self):
        for n in ["01", "02", "03", "04"]:
            self.assertIn(n, self.html)

    def test_process_section(self):
        self.assertIn("Our Process", self.html)

    def test_process_steps(self):
        for step in ["Discovery", "Development", "Production", "Post"]:
            self.assertIn(step, self.html)


class AboutPageTests(unittest.TestCase):
    def setUp(self):
        self.html = read("about.html")

    def test_title(self):
        self.assertIn("About", self.html)

    def test_founding_info(self):
        self.assertIn("2018", self.html)
        self.assertIn("New Delhi", self.html)

    def test_values_section(self):
        self.assertIn("What We Stand For", self.html)

    def test_four_values(self):
        for v in ["Editorial Independence", "Cultural Sensitivity",
                  "Cinematic Craft", "Commercial Clarity"]:
            self.assertIn(v, self.html)


class ContactPageTests(unittest.TestCase):
    def setUp(self):
        self.html = read("contact.html")

    def test_title(self):
        self.assertIn("Contact", self.html)

    def test_email_link(self):
        self.assertIn('href="mailto:contact@studiomahatta.com"', self.html)

    def test_form_present(self):
        self.assertIn("<form", self.html)

    def test_form_fields(self):
        for field in ['id="name"', 'id="email"', 'id="project-type"', 'id="message"']:
            self.assertIn(field, self.html)

    def test_form_submit_button(self):
        self.assertIn('type="submit"', self.html)

    def test_success_state(self):
        self.assertIn("form-success", self.html)

    def test_project_type_options(self):
        for opt in ["documentary", "brand-film", "animation", "ott"]:
            self.assertIn(opt, self.html)


if __name__ == "__main__":
    unittest.main(verbosity=2)
