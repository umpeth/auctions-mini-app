import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResponsiveBreadcrumb } from "./responsive-breadcrumb";

// Mock the useMediaQuery hook with a configurable return value
const mockUseMediaQuery = vi.fn(() => true);
vi.mock("@/hooks/use-media-query", () => ({
  useMediaQuery: () => mockUseMediaQuery(),
}));

const ITEMS_TO_DISPLAY = 3;

describe("ResponsiveBreadcrumb", () => {
  beforeEach(() => {
    mockUseMediaQuery.mockReturnValue(true); // Default to desktop view
  });

  describe("breadcrumb display variations", () => {
    const paths = {
      short: [
        { label: "Home", href: "/" },
        { label: "Auctions", href: "/auctions" },
      ],
      exact: [
        { label: "Home", href: "/" },
        { label: "Auctions", href: "/auctions" },
        { label: "Active", href: "/auctions/active" },
      ],
      medium: [
        { label: "Home", href: "/" },
        { label: "Auctions", href: "/auctions" },
        { label: "Categories", href: "/auctions/categories" },
        { label: "Item #123", href: "/auction/123" },
      ],
      long: [
        { label: "Home", href: "/" },
        { label: "Auctions", href: "/auctions" },
        { label: "Categories", href: "/auctions/categories" },
        { label: "Art", href: "/auctions/categories/art" },
        { label: "Digital", href: "/auctions/categories/art/digital" },
        { label: "Item #123", href: "/auction/123" },
      ],
    };

    it("shows all items when path length < 3", () => {
      render(<ResponsiveBreadcrumb items={paths.short} />);
      const breadcrumb = screen.getByLabelText("breadcrumb");
      expect(breadcrumb).toBeDefined();

      const breadcrumbItemsWithoutPresentation = breadcrumb.querySelectorAll(
        'li:not([role="presentation"])',
      );
      expect(breadcrumbItemsWithoutPresentation).toHaveLength(
        paths.short.length,
      );

      const ellipsis = screen.queryByLabelText("Toggle menu");
      expect(ellipsis).toBeNull();
    });

    it("shows all items when path length = 3", () => {
      render(<ResponsiveBreadcrumb items={paths.exact} />);
      const breadcrumb = screen.getByLabelText("breadcrumb");
      expect(breadcrumb).toBeDefined();

      const breadcrumbItemsWithoutPresentation = breadcrumb.querySelectorAll(
        'li:not([role="presentation"])',
      );
      expect(breadcrumbItemsWithoutPresentation).toHaveLength(
        paths.exact.length,
      );

      const ellipsis = screen.queryByLabelText("Toggle menu");
      expect(ellipsis).toBeNull();
    });

    it("shows ellipsis and no more than 3 paths when path length > 3", async () => {
      render(<ResponsiveBreadcrumb items={paths.medium} />);
      const breadcrumb = screen.getByLabelText("breadcrumb");
      expect(breadcrumb).toBeDefined();

      const ellipsis = screen.getByLabelText("Toggle menu");
      expect(ellipsis).toBeDefined();

      const breadcrumbItemsWithoutPresentation = breadcrumb.querySelectorAll(
        'li:not([role="presentation"])',
      );

      expect(breadcrumbItemsWithoutPresentation).toHaveLength(
        ITEMS_TO_DISPLAY + 1,
      );
    });

    it("shows dropdown when ellipsis is clicked", async () => {
      render(<ResponsiveBreadcrumb items={paths.medium} />);
      const ellipsis = screen.getByLabelText("Toggle menu");
      expect(ellipsis).toBeDefined();

      await userEvent.click(ellipsis);
      const dropdownItems = screen.getAllByRole("menuitem");
      expect(dropdownItems).toHaveLength(1); // Auctions
    });

    describe("mobile view", () => {
      beforeEach(() => {
        mockUseMediaQuery.mockReturnValue(false); // Set to mobile view
      });

      it("shows ellipsis menu in mobile view with correct items - medium path", async () => {
        render(<ResponsiveBreadcrumb items={paths.medium} />);
        const ellipsis = screen.getByLabelText(/toggle menu/i);
        expect(ellipsis).toBeDefined();

        await userEvent.click(ellipsis);

        // expect a dialog to open
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeDefined();

        // expect the dialog to contain the correct number of items
        const dialogItems = dialog.querySelectorAll("a");
        expect(dialogItems).toHaveLength(
          paths.medium.length - ITEMS_TO_DISPLAY,
        );
      });
      it("shows ellipsis menu in mobile view with correct items - long path", async () => {
        render(<ResponsiveBreadcrumb items={paths.long} />);

        const ellipsis = screen.getByLabelText(/toggle menu/i);
        expect(ellipsis).toBeDefined();

        await userEvent.click(ellipsis);

        // expect a dialog to open
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeDefined();

        // expect the dialog to contain the correct number of items
        const dialogItems = dialog.querySelectorAll("a");
        expect(dialogItems).toHaveLength(paths.long.length - ITEMS_TO_DISPLAY);
      });
    });
  });

  it("renders home icon for root path", () => {
    render(<ResponsiveBreadcrumb items={[{ label: "Home", href: "/" }]} />);
    const link = screen.getByRole("link");
    expect(link.className).toContain("flex items-center gap-2");
    const icon = link.querySelector("svg");
    expect(icon).toBeDefined();
  });
});
