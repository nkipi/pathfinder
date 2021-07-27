import { filter, union } from "lodash";
import React from "react";
import { ItemRenderer, MultiSelect } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";

interface State {
  selectedCategories: string[];
}

const categories = ["item 1", "item 2", "item 3"];

const CategoryMultiSelect = MultiSelect.ofType<string>();

export class Selection extends React.PureComponent<{}, State> {
  public state: State = {
    selectedCategories: [],
  };

  render() {
    return (
      <CategoryMultiSelect
        itemRenderer={this.renderCategory}
        itemsEqual={this.areCategoriesEqual}
        items={categories}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={this.handleCategorySelect}
        popoverProps={{ position: "bottom" }}
        tagRenderer={this.renderTag}
        tagInputProps={{
          onRemove: this.handleTagRemove,
          rightElement: this.renderClearButton(),
          large: true,
        }}
        selectedItems={this.state.selectedCategories}
        resetOnSelect={true}
        fill={true}
      />
    );
  }

  private handleCategorySelect = (category: string) => {
    if (!this.isCategorySelected(category)) {
      this.addCategory(category);
    } else {
      this.removeCategory(category);
    }
  };

  private renderTag = (category: string) => category;

  private handleTagRemove = (_tag: React.ReactNode, index: number) => {
    const category = this.state.selectedCategories[index];
    this.removeCategory(category);
  };

  private renderClearButton() {
    return this.state.selectedCategories.length > 0 ? (
      <Button icon="cross" minimal={true} onClick={this.handleClear} />
    ) : undefined;
  }

  private handleClear = () => this.setState({ selectedCategories: [] });

  private renderCategory: ItemRenderer<string> = (category, categoryProps) => {
    if (category.indexOf(categoryProps.query) === -1) {
      return null;
    }
    return (
      <MenuItem
        active={categoryProps.modifiers.active}
        icon={this.isCategorySelected(category) ? "tick" : "blank"}
        key={category}
        onClick={categoryProps.handleClick}
        text={category}
      />
    );
  };

  private isCategorySelected(category: string) {
    return this.state.selectedCategories.includes(category);
  }

  private addCategory(category: string) {
    const selectedCategories = union(this.state.selectedCategories, [category]);
    this.setState({ selectedCategories });
  }

  private removeCategory(category: string) {
    const selectedCategories = filter(
      this.state.selectedCategories,
      (c) => c !== category
    );
    this.setState({ selectedCategories });
  }

  private areCategoriesEqual(cat1: string, cat2: string) {
    return cat1.toLowerCase() === cat2.toLowerCase();
  }
}
