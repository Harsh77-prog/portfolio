import PropTypes from "prop-types";
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_DISTANCE = 24;
export const CREAM_EASE = [0.16, 1, 0.3, 1];
export const CREAM_SPRING = {
  type: "spring",
  stiffness: 120,
  damping: 26,
  mass: 1,
};

function getOffset(direction, distance) {
  switch (direction) {
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "down":
      return { x: 0, y: -distance };
    default:
      return { x: 0, y: distance };
  }
}

function buildVariants({ direction, distance, duration, delay, variant }) {
  const offset = getOffset(direction, distance);

  const base = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
  };

  if (variant === "tilt") {
    return {
      hidden: { ...base, scale: 0.985, rotateX: 4, rotateZ: -0.8 },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateZ: 0,
        transition: { duration, ease: CREAM_EASE, delay, type: "tween" },
      },
    };
  }

  if (variant === "glide") {
    return {
      hidden: { ...base, scale: 0.985 },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration, ease: CREAM_EASE, delay, type: "tween" },
      },
    };
  }

  return {
    hidden: { ...base, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, ease: CREAM_EASE, delay, type: "tween" },
    },
  };
}

export const RevealItem = memo(function RevealItem({
  as = "div",
  className = "",
  delay = 0,
  duration = 1.05,
  direction = "up",
  distance = DEFAULT_DISTANCE,
  variant = "soft",
  children,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={buildVariants({ direction, distance, duration, delay, variant })}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

RevealItem.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  distance: PropTypes.number,
  variant: PropTypes.oneOf(["soft", "glide", "tilt"]),
  children: PropTypes.node.isRequired,
};

export const RevealGroup = memo(function RevealGroup({
  as = "div",
  className = "",
  delay = 0,
  stagger = 0.12,
  once = true,
  amount = 0.25,
  children,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const variants = reduceMotion
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

RevealGroup.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  stagger: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const Reveal = memo(function Reveal({
  as = "div",
  className = "",
  delay = 0,
  duration = 1.05,
  direction = "up",
  distance = DEFAULT_DISTANCE,
  variant = "soft",
  once = true,
  amount = 0.25,
  children,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
        show: { opacity: 1, x: 0, y: 0, scale: 1 },
      }
    : buildVariants({ direction, distance, duration, delay, variant });

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

Reveal.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  distance: PropTypes.number,
  variant: PropTypes.oneOf(["soft", "glide", "tilt"]),
  once: PropTypes.bool,
  amount: PropTypes.number,
  children: PropTypes.node.isRequired,
};

RevealItem.displayName = "RevealItem";
RevealGroup.displayName = "RevealGroup";
Reveal.displayName = "Reveal";

export default Reveal;
