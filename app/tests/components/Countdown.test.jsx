var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(CountDown).toExist();
    });

    describe('handleSetountdown', () => {
        it('should set state to started and countdown', () => {
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
            }, 1001)
        });
        it('should never set count less than zero', () => {
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
            }, 3001)
        });
    });
});