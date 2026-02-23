"""Tests for index.html — Studio Mahatta Website"""

import pathlib
import unittest

HTML = pathlib.Path(__file__).with_name("index.html").read_text(encoding="utf-8")


def has(text: str) -> bool:
    return text in HTML


class MetaTests(unittest.TestCase):
    def test_lang_is_english(self):
        self.assertIn('lang="en"', HTML)

    def test_charset_utf8(self):
        self.assertRegex(HTML, r'charset=.utf-8', re.IGNORECASE if False else 0)
        self.assertIn("utf-8", HTML.lower())

    def test_viewport_meta_present(self):
        self.assertIn("viewport", HTML)

    def test_page_title(self):
        self.assertIn("<title>Studio Mahatta</title>", HTML)


class ContentTests(unittest.TestCase):
    def test_h1_studio_name(self):
        self.assertIn("<h1>Studio Mahatta</h1>", HTML)

    def test_tagline_present(self):
        self.assertIn("Boutique production house", HTML)

    def test_contact_email_link(self):
        self.assertIn('href="mailto:contact@studiomahatta.com"', HTML)

    def test_work_section_heading(self):
        self.assertIn("<h2>Work</h2>", HTML)

    def test_work_section_lists_documentaries(self):
        self.assertIn("Documentaries", HTML)

    def test_work_section_lists_animation(self):
        self.assertIn("Animation", HTML)

    def test_work_section_lists_ott(self):
        self.assertIn("OTT", HTML)

    def test_about_section_heading(self):
        self.assertIn("<h2>About</h2>", HTML)

    def test_about_section_description(self):
        self.assertIn("long-format storytelling", HTML)


if __name__ == "__main__":
    unittest.main(verbosity=2)
