import Home from "@/app/(home)/page";
import Blogs from "@/components/blogs/Blogs";
import { render, screen, waitFor } from "@testing-library/react";
describe("Home page render", () => {
  // it("should have home page text", () => {
  //   render(<Home />);
  //   expect(screen.getByText("Popular Blogs")).toBeInTheDocument();
  // });
  it("blog title appears", async () => {
    render(<Blogs />);
    await waitFor(() => {
      expect(screen.getByText("Pow.bio says")).toBeInTheDocument();
    });
  });
});
