// Example usage file showing how to apply the ScrollAnimationWrapper to different sections

import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

// Example 1: Basic usage with default slideUp animation
export function BasicSection() {
  return (
    <ScrollAnimationWrapper className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Basic Section</h2>
        <p className="text-lg text-center">Your content here...</p>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Example 2: Custom animation with fade effect
export function FadeSection() {
  return (
    <ScrollAnimationWrapper 
      animationType="fade"
      duration={0.8}
      delay={0.2}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Fade In Section</h2>
        {/* Your existing section content */}
      </div>
    </ScrollAnimationWrapper>
  );
}

// Example 3: Slide from right animation
export function SlideRightSection() {
  return (
    <ScrollAnimationWrapper 
      animationType="slideRight"
      initialY={80}
      duration={0.7}
      viewportAmount={0.2}
      className="py-24 bg-slate-200"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Slide From Right</h2>
        {/* Your content */}
      </div>
    </ScrollAnimationWrapper>
  );
}

// Example 4: Scale animation with custom timing
export function ScaleSection() {
  return (
    <ScrollAnimationWrapper 
      animationType="scale"
      duration={0.9}
      delay={0.1}
      easing="easeInOut"
      className="py-16"
    >
      <div className="text-center">
        <h2 className="text-6xl font-bold">Scale Animation</h2>
        {/* Your content */}
      </div>
    </ScrollAnimationWrapper>
  );
}

// Example 5: Custom animation with completely custom properties
export function CustomSection() {
  return (
    <ScrollAnimationWrapper 
      animationType="custom"
      customInitial={{ 
        y: 100, 
        opacity: 0, 
        scale: 0.9, 
        rotateX: -15 
      }}
      customAnimate={{ 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotateX: 0 
      }}
      duration={1}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold">Custom Animation</h2>
        {/* Your content */}
      </div>
    </ScrollAnimationWrapper>
  );
}