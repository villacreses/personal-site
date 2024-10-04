"use client";

import { Component, ReactNode, MouseEvent, createRef, RefObject } from "react";
import { Markdown, MarkdownComponents } from ".";

import styles from "./ToggleSection.module.css";

type ToggleSectionProps = {
  title: string;
  children: string;
};

enum action {
  CLOSING = "CLOSING",
  EXPANDING = "EXPANDING",
}

type ToggleSectionState = {
  action: action | null;
};

export class ToggleSection extends Component<
  ToggleSectionProps,
  ToggleSectionState
> {
  details: RefObject<HTMLDetailsElement>;
  summary: RefObject<HTMLElement>;
  content: RefObject<HTMLDivElement>;

  animation: Animation | null;

  constructor(props: ToggleSectionProps) {
    super(props);

    this.state = {
      action: null,
    };

    this.details = createRef<HTMLDetailsElement>();
    this.summary = createRef<HTMLElement>();
    this.content = createRef<HTMLDivElement>();

    this.animation = null;

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt: MouseEvent<HTMLElement>) {
    evt.preventDefault();

    this.details.current?.classList.add("overflow-hidden");

    const isOpen = this.details.current?.hasAttribute("open");

    if (this.state.action === action.CLOSING || !isOpen) {
      this.open();
    } else if (this.state.action === action.EXPANDING || isOpen) {
      this.shrink();
    }
  }

  open() {
    if (!this.details.current) return;

    const height = this.details.current?.offsetHeight;

    this.details.current.style.height = `${height}px`;
    this.details.current?.toggleAttribute("open", true);
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    if (!this.details.current || !this.summary.current || !this.content.current)
      return;

    this.setState({ action: action.EXPANDING });

    const startHeight = this.details.current.offsetHeight;
    const endHeight =
      this.summary.current.offsetHeight + this.content.current.offsetHeight;

    this.animate(startHeight, endHeight, true);
  }

  shrink() {
    if (!this.details.current || !this.summary.current) return;

    this.setState({ action: action.CLOSING });

    const startHeight = this.details.current.offsetHeight;
    const endHeight = this.summary.current.offsetHeight;
    this.animate(startHeight, endHeight, false);
  }

  animate(startHeight: number, endHeight: number, keepOpen: boolean) {
    if (!this.details.current) return;
    this.animation?.cancel();

    this.animation = this.details.current?.animate(
      [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
      {
        duration: 450,
        easing: "ease-out",
      },
    );

    this.animation.oncancel = () => this.setState({ action: null });
    this.animation.onfinish = () => this.onAnimationFinish(keepOpen);
  }

  onAnimationFinish(isOpen: boolean) {
    this.details.current?.toggleAttribute("open", isOpen);

    this.animation = null;
    this.setState({ action: null });

    this.details.current?.classList.remove("overflow-hidden");
    this.details.current!.style.height = "";
  }

  private static markdownComponents: MarkdownComponents = {
    p({ node, className, ...props }) {
      return <p className="mt-2" {...props} />;
    },

    li({ node, className, ...props }) {
      return <li className={styles.entry} {...props} />;
    },
  };

  render(): ReactNode {
    return (
      <details ref={this.details} className="mt-8">
        <summary
          ref={this.summary}
          onClick={this.onClick}
          className="font-bold uppercase tracking-widest"
        >
          {this.props.title}
        </summary>
        <div ref={this.content} className="ml-4 mt-3">
          <Markdown components={ToggleSection.markdownComponents}>
            {this.props.children}
          </Markdown>
        </div>
      </details>
    );
  }
}
